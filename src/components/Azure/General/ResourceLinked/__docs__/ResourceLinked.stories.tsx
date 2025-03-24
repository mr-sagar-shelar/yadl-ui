import type { Meta, StoryObj } from "@storybook/react";
import ResourceLinked from "../ResourceLinked";

const meta: Meta<typeof ResourceLinked> = { title: "Azure/General/ResourceLinked", component: ResourceLinked };

export default meta;
type Story = StoryObj<typeof ResourceLinked>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
