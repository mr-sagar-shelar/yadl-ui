import type { Meta, StoryObj } from "@storybook/react";
import AfterEffects from "../AfterEffects";

const meta: Meta<typeof AfterEffects> = { title: "SkillIcon/AfterEffects", component: AfterEffects };

export default meta;
type Story = StoryObj<typeof AfterEffects>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
