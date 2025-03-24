import type { Meta, StoryObj } from "@storybook/react";
import Redux from "../Redux";

const meta: Meta<typeof Redux> = { title: "SkillSet/Redux", component: Redux };

export default meta;
type Story = StoryObj<typeof Redux>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
