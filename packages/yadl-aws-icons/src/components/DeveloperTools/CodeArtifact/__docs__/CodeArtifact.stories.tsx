import type { Meta, StoryObj } from "@storybook/react";
import CodeArtifact from "../CodeArtifact";

const meta: Meta<typeof CodeArtifact> = { title: "AWS/DeveloperTools/CodeArtifact", component: CodeArtifact };

export default meta;
type Story = StoryObj<typeof CodeArtifact>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
