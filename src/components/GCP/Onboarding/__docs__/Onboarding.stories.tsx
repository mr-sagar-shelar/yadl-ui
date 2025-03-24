import type { Meta, StoryObj } from "@storybook/react";
import Onboarding from "../Onboarding";

const meta: Meta<typeof Onboarding> = { title: "GCP/Onboarding", component: Onboarding };

export default meta;
type Story = StoryObj<typeof Onboarding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
