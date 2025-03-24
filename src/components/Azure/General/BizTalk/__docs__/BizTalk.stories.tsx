import type { Meta, StoryObj } from "@storybook/react";
import BizTalk from "../BizTalk";

const meta: Meta<typeof BizTalk> = { title: "Azure/General/BizTalk", component: BizTalk };

export default meta;
type Story = StoryObj<typeof BizTalk>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
