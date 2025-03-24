import type { Meta, StoryObj } from "@storybook/react";
import DiscordJS from "../DiscordJS";

const meta: Meta<typeof DiscordJS> = { title: "SkillSet/DiscordJS", component: DiscordJS };

export default meta;
type Story = StoryObj<typeof DiscordJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
