import type { Meta, StoryObj } from "@storybook/react";
import DataBox from "../DataBox";

const meta: Meta<typeof DataBox> = { title: "Azure/Storage/DataBox", component: DataBox };

export default meta;
type Story = StoryObj<typeof DataBox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
