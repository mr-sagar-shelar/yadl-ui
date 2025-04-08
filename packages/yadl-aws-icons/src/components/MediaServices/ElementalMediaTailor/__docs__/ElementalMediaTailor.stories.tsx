import type { Meta, StoryObj } from "@storybook/react";
import ElementalMediaTailor from "../ElementalMediaTailor";

const meta: Meta<typeof ElementalMediaTailor> = { title: "AWS/MediaServices/ElementalMediaTailor", component: ElementalMediaTailor };

export default meta;
type Story = StoryObj<typeof ElementalMediaTailor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
