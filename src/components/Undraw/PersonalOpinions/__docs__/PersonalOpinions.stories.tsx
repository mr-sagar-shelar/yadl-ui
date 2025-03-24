import type { Meta, StoryObj } from "@storybook/react";
import PersonalOpinions from "../PersonalOpinions";

const meta: Meta<typeof PersonalOpinions> = { title: "unDraw/PersonalOpinions", component: PersonalOpinions };

export default meta;
type Story = StoryObj<typeof PersonalOpinions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
