import type { Meta, StoryObj } from "@storybook/react";
import FallIsComingFallIsComing from "../FallIsComingFallIsComing";

const meta: Meta<typeof FallIsComingFallIsComing> = { title: "unDraw/FallIsComingFallIsComing", component: FallIsComingFallIsComing };

export default meta;
type Story = StoryObj<typeof FallIsComingFallIsComing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
