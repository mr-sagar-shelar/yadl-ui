import type { Meta, StoryObj } from "@storybook/react";
import Cognito from "../Cognito";

const meta: Meta<typeof Cognito> = { title: "AWS/SecurityIdentityCompliance/Cognito", component: Cognito };

export default meta;
type Story = StoryObj<typeof Cognito>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
