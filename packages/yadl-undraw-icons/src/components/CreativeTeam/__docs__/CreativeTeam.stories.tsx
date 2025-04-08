import type { Meta, StoryObj } from "@storybook/react";
import CreativeTeam from "../CreativeTeam";

const meta: Meta<typeof CreativeTeam> = { title: "unDraw/CreativeTeam", component: CreativeTeam };

export default meta;
type Story = StoryObj<typeof CreativeTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
