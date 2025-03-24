import type { Meta, StoryObj } from "@storybook/react";
import Be_the_heroBeTheHero from "../Be_the_heroBeTheHero";

const meta: Meta<typeof Be_the_heroBeTheHero> = { title: "unDraw/Be_the_heroBeTheHero", component: Be_the_heroBeTheHero };

export default meta;
type Story = StoryObj<typeof Be_the_heroBeTheHero>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
