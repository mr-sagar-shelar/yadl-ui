import type { Meta, StoryObj } from "@storybook/react";
import Templates from "../Templates";

const meta: Meta<typeof Templates> = { title: "Azure/General/Templates", component: Templates };

export default meta;
type Story = StoryObj<typeof Templates>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
