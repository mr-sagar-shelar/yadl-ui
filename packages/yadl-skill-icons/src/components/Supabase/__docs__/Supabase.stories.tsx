import type { Meta, StoryObj } from "@storybook/react";
import Supabase from "../Supabase";

const meta: Meta<typeof Supabase> = { title: "SkillIcon/Supabase", component: Supabase };

export default meta;
type Story = StoryObj<typeof Supabase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
