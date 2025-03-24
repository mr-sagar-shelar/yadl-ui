import type { Meta, StoryObj } from "@storybook/react";
import Spreadsheet from "../Spreadsheet";

const meta: Meta<typeof Spreadsheet> = { title: "unDraw/Spreadsheet", component: Spreadsheet };

export default meta;
type Story = StoryObj<typeof Spreadsheet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
