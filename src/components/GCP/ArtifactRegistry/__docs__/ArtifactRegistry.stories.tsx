import type { Meta, StoryObj } from "@storybook/react";
import ArtifactRegistry from "../ArtifactRegistry";

const meta: Meta<typeof ArtifactRegistry> = { title: "GCP/ArtifactRegistry", component: ArtifactRegistry };

export default meta;
type Story = StoryObj<typeof ArtifactRegistry>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
