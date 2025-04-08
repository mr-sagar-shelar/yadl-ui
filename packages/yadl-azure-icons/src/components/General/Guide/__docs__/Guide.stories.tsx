import type { Meta, StoryObj } from "@storybook/react";
import Guide from "../Guide";

const meta: Meta<typeof Guide> = { title: "Azure/General/Guide", component: Guide };

export default meta;
type Story = StoryObj<typeof Guide>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
