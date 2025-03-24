import type { Meta, StoryObj } from "@storybook/react";
import Workbooks from "../Workbooks";

const meta: Meta<typeof Workbooks> = { title: "Azure/General/Workbooks", component: Workbooks };

export default meta;
type Story = StoryObj<typeof Workbooks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
