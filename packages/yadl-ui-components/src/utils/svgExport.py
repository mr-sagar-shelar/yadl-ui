import win32com.client
import os
import subprocess

DRAWABLE_TYPES = {1, 3, 9, 13}  # AutoShape, Picture, Line, Freeform

def is_shape_group(group_shape):
    """Return True if group contains at least one drawable shape (not just text)."""
    for item in group_shape.GroupItems:
        if item.Type in DRAWABLE_TYPES:
            return True
    return False

def export_shapes_as_emf_and_convert(pptx_path, output_dir, inkscape_path="inkscape"):
    powerpoint = win32com.client.Dispatch("PowerPoint.Application")
    presentation = powerpoint.Presentations.Open(pptx_path, WithWindow=False)

    os.makedirs(output_dir, exist_ok=True)
    group_counter = 0
    for i, slide in enumerate(presentation.Slides, start=1):
        if i < 3:
            for j, shape in enumerate(slide.Shapes, start=1):
                if shape.Type == 6:
                    if is_shape_group(shape):
                        group_counter += 1
                        emf_file = os.path.join(output_dir, f"slide{i}_group{group_counter}.emf")
                        svg_file = os.path.join(output_dir, f"slide{i}_group{group_counter}.svg")

                        shape.Export(emf_file, 6)

                        # Convert to SVG with Inkscape
                        subprocess.run([inkscape_path, emf_file, "--export-type=svg", "-o", svg_file])

                        # Print details
                        # print(f"[Slide {i}] Exported Group #{group_counter}")
                        print(f"  • Saved to: {svg_file}")

    presentation.Close()
    powerpoint.Quit()

# Example usage
export_shapes_as_emf_and_convert(r"E:\\YADL\\Infographics3.pptx", r"E:\\YADL\\GenderatedSVG")
