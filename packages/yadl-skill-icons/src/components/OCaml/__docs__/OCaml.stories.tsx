import type { Meta, StoryObj } from "@storybook/react";
import OCaml from "../OCaml";

const meta: Meta<typeof OCaml> = { title: "SkillIcon/OCaml", component: OCaml };

export default meta;
type Story = StoryObj<typeof OCaml>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
