import type { Meta, StoryObj } from "@storybook/react";
import Hibernate from "../Hibernate";

const meta: Meta<typeof Hibernate> = { title: "SkillIcon/Hibernate", component: Hibernate };

export default meta;
type Story = StoryObj<typeof Hibernate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
