import type { Meta, StoryObj } from "@storybook/react";
import Prisma from "../Prisma";

const meta: Meta<typeof Prisma> = { title: "SkillIcon/Prisma", component: Prisma };

export default meta;
type Story = StoryObj<typeof Prisma>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
