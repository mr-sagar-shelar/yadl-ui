import type { Meta, StoryObj } from "@storybook/react";
import ComprehendMedical from "../ComprehendMedical";

const meta: Meta<typeof ComprehendMedical> = { title: "AWS/MachineLearning/ComprehendMedical", component: ComprehendMedical };

export default meta;
type Story = StoryObj<typeof ComprehendMedical>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
