import type { Meta, StoryObj } from "@storybook/react";
import WebSlots from "../WebSlots";

const meta: Meta<typeof WebSlots> = { title: "Azure/General/WebSlots", component: WebSlots };

export default meta;
type Story = StoryObj<typeof WebSlots>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
