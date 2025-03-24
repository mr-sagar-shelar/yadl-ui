import type { Meta, StoryObj } from "@storybook/react";
import FoundingTeam from "../FoundingTeam";

const meta: Meta<typeof FoundingTeam> = { title: "unDraw/FoundingTeam", component: FoundingTeam };

export default meta;
type Story = StoryObj<typeof FoundingTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
