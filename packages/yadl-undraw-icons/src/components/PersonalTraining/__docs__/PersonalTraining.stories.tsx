import type { Meta, StoryObj } from "@storybook/react";
import PersonalTraining from "../PersonalTraining";

const meta: Meta<typeof PersonalTraining> = { title: "unDraw/PersonalTraining", component: PersonalTraining };

export default meta;
type Story = StoryObj<typeof PersonalTraining>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
