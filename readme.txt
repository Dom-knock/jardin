
33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html


33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git branch
* main

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git branch origin/main

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git pull
Already up to date.

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git push
Everything up-to-date

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git merge
Already up to date.

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git branch dom

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git push
To https://github.com/Dom-knock/jardin.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/Dom-knock/jardin.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ ^C

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git pull
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 1), reused 3 (delta 1), pack-reused 0 (from 0)
Unpacking objects: 100% (4/4), 1.22 KiB | 46.00 KiB/s, done.
From https://github.com/Dom-knock/jardin
   cc5d7b0..44985dd  main       -> origin/main
Updating cc5d7b0..44985dd
error: Your local changes to the following files would be overwritten by merge:
        index.html
Please commit your changes or stash them before you merge.
Aborting

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git branch
  dom
* main
  origin/main

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ ^C

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git merge
Updating cc5d7b0..44985dd
error: Your local changes to the following files would be overwritten by merge:
        index.html
Please commit your changes or stash them before you merge.
Aborting

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git merge
Updating cc5d7b0..44985dd
error: Your local changes to the following files would be overwritten by merge:
        index.html
Please commit your changes or stash them before you merge.
Aborting

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git pull origin main
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 1), reused 3 (delta 1), pack-reused 0 (from 0)
Unpacking objects: 100% (4/4), 1.21 KiB | 38.00 KiB/s, done.
From https://github.com/Dom-knock/jardin
 * branch            main       -> FETCH_HEAD
   44985dd..7ac5622  main       -> origin/main
Updating cc5d7b0..7ac5622
error: Your local changes to the following files would be overwritten by merge:
        index.html
Please commit your changes or stash them before you merge.
Aborting

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ ^C

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git add .

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git commit -m "sauvegarder avant pull"
[main 375e4a1] sauvegarder avant pull
 3 files changed, 287 insertions(+), 5 deletions(-)

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git pull origin main
From https://github.com/Dom-knock/jardin
 * branch            main       -> FETCH_HEAD
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main|MERGING)
$ ^C

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main|MERGING)
$ git add index.html

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main|MERGING)
$ git commit -m "resolution conflit index.html"
[main 7e903de] resolution conflit index.html

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git merge
Already up to date.

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git add index.html

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git -m "resolution conflit"
unknown option: -m
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--no-lazy-fetch]
           [--no-optional-locks] [--no-advice] [--bare] [--git-dir=<path>]
           [--work-tree=<path>] [--namespace=<name>] [--config-env=<name>=<envvar>]
           <command> [<args>]

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git commit -m "resolution conflit"
On branch main
Your branch is ahead of 'remotes/origin/main' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git push origin main
Enumerating objects: 16, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 12 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 2.74 KiB | 2.74 MiB/s, done.
Total 8 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/Dom-knock/jardin.git
   7ac5622..7e903de  main -> main

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git status
On branch main
Your branch is up to date with 'remotes/origin/main'.

nothing to commit, working tree clean

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git pull
Already up to date.

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git push
Everything up-to-date

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git add style.css

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git -m "fichier css"
unknown option: -m
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--no-lazy-fetch]
           [--no-optional-locks] [--no-advice] [--bare] [--git-dir=<path>]
           [--work-tree=<path>] [--namespace=<name>] [--config-env=<name>=<envvar>]
           <command> [<args>]

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git commit -m "fichier css"
On branch main
Your branch is up to date with 'remotes/origin/main'.

nothing to commit, working tree clean

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git push origin main
Everything up-to-date

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git status
On branch main
Your branch is up to date with 'remotes/origin/main'.

nothing to commit, working tree clean

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git pull
Already up to date.

33627@DESKTOP-A1CQ81Q MINGW64 ~/Desktop/Formation Webecom/Cours/exercices/jardin (main)
$ git push
Everything up-to-date

33627@D