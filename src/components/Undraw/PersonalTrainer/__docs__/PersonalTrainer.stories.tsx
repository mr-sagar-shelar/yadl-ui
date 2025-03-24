import type { Meta, StoryObj } from "@storybook/react";
import PersonalTrainer from "../PersonalTrainer";

const meta: Meta<typeof PersonalTrainer> = { title: "unDraw/PersonalTrainer", component: PersonalTrainer };

export default meta;
type Story = StoryObj<typeof PersonalTrainer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
