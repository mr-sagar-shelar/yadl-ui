import type { Meta, StoryObj } from "@storybook/react";
import TrainingCertification from "../TrainingCertification";

const meta: Meta<typeof TrainingCertification> = { title: "AWS/CustomerEnablement/TrainingCertification", component: TrainingCertification };

export default meta;
type Story = StoryObj<typeof TrainingCertification>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
