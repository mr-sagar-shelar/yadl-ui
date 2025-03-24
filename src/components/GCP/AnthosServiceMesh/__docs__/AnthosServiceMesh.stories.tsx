import type { Meta, StoryObj } from "@storybook/react";
import AnthosServiceMesh from "../AnthosServiceMesh";

const meta: Meta<typeof AnthosServiceMesh> = { title: "GCP/AnthosServiceMesh", component: AnthosServiceMesh };

export default meta;
type Story = StoryObj<typeof AnthosServiceMesh>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
