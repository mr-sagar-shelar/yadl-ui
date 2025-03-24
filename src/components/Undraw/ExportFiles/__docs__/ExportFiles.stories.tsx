import type { Meta, StoryObj } from "@storybook/react";
import ExportFiles from "../ExportFiles";

const meta: Meta<typeof ExportFiles> = { title: "unDraw/ExportFiles", component: ExportFiles };

export default meta;
type Story = StoryObj<typeof ExportFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
