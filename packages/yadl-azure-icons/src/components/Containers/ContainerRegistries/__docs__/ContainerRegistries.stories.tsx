import type { Meta, StoryObj } from "@storybook/react";
import ContainerRegistries from "../ContainerRegistries";

const meta: Meta<typeof ContainerRegistries> = { title: "Azure/Containers/ContainerRegistries", component: ContainerRegistries };

export default meta;
type Story = StoryObj<typeof ContainerRegistries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
