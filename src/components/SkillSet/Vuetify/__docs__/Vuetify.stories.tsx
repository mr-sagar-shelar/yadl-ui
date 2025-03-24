import type { Meta, StoryObj } from "@storybook/react";
import Vuetify from "../Vuetify";

const meta: Meta<typeof Vuetify> = { title: "SkillSet/Vuetify", component: Vuetify };

export default meta;
type Story = StoryObj<typeof Vuetify>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
