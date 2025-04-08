import type { Meta, StoryObj } from "@storybook/react";
import ServerlessApplicationRepository from "../ServerlessApplicationRepository";

const meta: Meta<typeof ServerlessApplicationRepository> = { title: "AWS/Compute/ServerlessApplicationRepository", component: ServerlessApplicationRepository };

export default meta;
type Story = StoryObj<typeof ServerlessApplicationRepository>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
