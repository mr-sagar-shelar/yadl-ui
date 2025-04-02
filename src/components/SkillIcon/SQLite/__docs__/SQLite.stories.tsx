import type { Meta, StoryObj } from "@storybook/react";
import SQLite from "../SQLite";

const meta: Meta<typeof SQLite> = { title: "SkillIcon/SQLite", component: SQLite };

export default meta;
type Story = StoryObj<typeof SQLite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
