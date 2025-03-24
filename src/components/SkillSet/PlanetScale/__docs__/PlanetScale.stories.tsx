import type { Meta, StoryObj } from "@storybook/react";
import PlanetScale from "../PlanetScale";

const meta: Meta<typeof PlanetScale> = { title: "SkillSet/PlanetScale", component: PlanetScale };

export default meta;
type Story = StoryObj<typeof PlanetScale>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
