import type { Meta, StoryObj } from "@storybook/react";
import Artifact from "../Artifact";

const meta: Meta<typeof Artifact> = { title: "AWS/SecurityIdentityCompliance/Artifact", component: Artifact };

export default meta;
type Story = StoryObj<typeof Artifact>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
