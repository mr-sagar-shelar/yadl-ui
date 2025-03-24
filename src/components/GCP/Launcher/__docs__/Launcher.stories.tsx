import type { Meta, StoryObj } from "@storybook/react";
import Launcher from "../Launcher";

const meta: Meta<typeof Launcher> = { title: "GCP/Launcher", component: Launcher };

export default meta;
type Story = StoryObj<typeof Launcher>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
