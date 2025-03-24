import type { Meta, StoryObj } from "@storybook/react";
import Junior_soccerJuniorSoccer from "../Junior_soccerJuniorSoccer";

const meta: Meta<typeof Junior_soccerJuniorSoccer> = { title: "unDraw/Junior_soccerJuniorSoccer", component: Junior_soccerJuniorSoccer };

export default meta;
type Story = StoryObj<typeof Junior_soccerJuniorSoccer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
