import type { Meta, StoryObj } from "@storybook/react";
import TeamPage from "../TeamPage";

const meta: Meta<typeof TeamPage> = { title: "unDraw/TeamPage", component: TeamPage };

export default meta;
type Story = StoryObj<typeof TeamPage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
