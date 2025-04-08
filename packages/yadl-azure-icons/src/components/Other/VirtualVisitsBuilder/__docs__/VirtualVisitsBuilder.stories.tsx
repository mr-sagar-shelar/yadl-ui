import type { Meta, StoryObj } from "@storybook/react";
import VirtualVisitsBuilder from "../VirtualVisitsBuilder";

const meta: Meta<typeof VirtualVisitsBuilder> = { title: "Azure/Other/VirtualVisitsBuilder", component: VirtualVisitsBuilder };

export default meta;
type Story = StoryObj<typeof VirtualVisitsBuilder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
