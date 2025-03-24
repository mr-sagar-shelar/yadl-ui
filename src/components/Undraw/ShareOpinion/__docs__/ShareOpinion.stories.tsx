import type { Meta, StoryObj } from "@storybook/react";
import ShareOpinion from "../ShareOpinion";

const meta: Meta<typeof ShareOpinion> = { title: "unDraw/ShareOpinion", component: ShareOpinion };

export default meta;
type Story = StoryObj<typeof ShareOpinion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
