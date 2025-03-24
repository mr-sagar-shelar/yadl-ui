import type { Meta, StoryObj } from "@storybook/react";
import GoogleKubernetesEngine from "../GoogleKubernetesEngine";

const meta: Meta<typeof GoogleKubernetesEngine> = { title: "GCP/GoogleKubernetesEngine", component: GoogleKubernetesEngine };

export default meta;
type Story = StoryObj<typeof GoogleKubernetesEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
