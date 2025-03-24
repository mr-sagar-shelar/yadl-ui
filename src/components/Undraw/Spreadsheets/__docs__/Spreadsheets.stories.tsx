import type { Meta, StoryObj } from "@storybook/react";
import Spreadsheets from "../Spreadsheets";

const meta: Meta<typeof Spreadsheets> = { title: "unDraw/Spreadsheets", component: Spreadsheets };

export default meta;
type Story = StoryObj<typeof Spreadsheets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
