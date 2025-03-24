import type { Meta, StoryObj } from "@storybook/react";
import Fortran from "../Fortran";

const meta: Meta<typeof Fortran> = { title: "SkillSet/Fortran", component: Fortran };

export default meta;
type Story = StoryObj<typeof Fortran>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
