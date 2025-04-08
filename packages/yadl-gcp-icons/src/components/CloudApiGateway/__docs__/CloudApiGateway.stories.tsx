import type { Meta, StoryObj } from "@storybook/react";
import CloudApiGateway from "../CloudApiGateway";

const meta: Meta<typeof CloudApiGateway> = { title: "GCP/CloudApiGateway", component: CloudApiGateway };

export default meta;
type Story = StoryObj<typeof CloudApiGateway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
