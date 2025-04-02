import type { Meta, StoryObj } from "@storybook/react";
import DiscordBots from "../DiscordBots";

const meta: Meta<typeof DiscordBots> = { title: "SkillIcon/DiscordBots", component: DiscordBots };

export default meta;
type Story = StoryObj<typeof DiscordBots>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
