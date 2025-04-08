import type { Meta, StoryObj } from "@storybook/react";
import DogWalking from "../DogWalking";

const meta: Meta<typeof DogWalking> = { title: "unDraw/DogWalking", component: DogWalking };

export default meta;
type Story = StoryObj<typeof DogWalking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
