import type { Meta, StoryObj } from "@storybook/react";
import ContentTeam from "../ContentTeam";

const meta: Meta<typeof ContentTeam> = { title: "unDraw/ContentTeam", component: ContentTeam };

export default meta;
type Story = StoryObj<typeof ContentTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
