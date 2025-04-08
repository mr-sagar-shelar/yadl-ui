import type { Meta, StoryObj } from "@storybook/react";
import Rekognition from "../Rekognition";

const meta: Meta<typeof Rekognition> = { title: "AWS/MachineLearning/Rekognition", component: Rekognition };

export default meta;
type Story = StoryObj<typeof Rekognition>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
