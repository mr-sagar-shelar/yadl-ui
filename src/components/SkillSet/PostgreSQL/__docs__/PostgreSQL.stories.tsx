import type { Meta, StoryObj } from "@storybook/react";
import PostgreSQL from "../PostgreSQL";

const meta: Meta<typeof PostgreSQL> = { title: "SkillSet/PostgreSQL", component: PostgreSQL };

export default meta;
type Story = StoryObj<typeof PostgreSQL>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
