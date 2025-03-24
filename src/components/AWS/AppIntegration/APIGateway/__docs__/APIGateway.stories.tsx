import type { Meta, StoryObj } from "@storybook/react";
import APIGateway from "../APIGateway";

const meta: Meta<typeof APIGateway> = { title: "AWS/AppIntegration/APIGateway", component: APIGateway };

export default meta;
type Story = StoryObj<typeof APIGateway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
