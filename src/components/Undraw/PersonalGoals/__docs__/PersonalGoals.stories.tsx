import type { Meta, StoryObj } from "@storybook/react";
import PersonalGoals from "../PersonalGoals";

const meta: Meta<typeof PersonalGoals> = { title: "unDraw/PersonalGoals", component: PersonalGoals };

export default meta;
type Story = StoryObj<typeof PersonalGoals>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
